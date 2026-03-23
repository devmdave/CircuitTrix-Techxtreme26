const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'components'), function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace hex colors (case insensitive)
    content = content.replace(/#A3FF12/gi, '#00F6FF');
    
    // Replace hover glow class hex
    content = content.replace(/rgba\(163,\s*255,\s*18/gi, 'rgba(0, 246, 255');
    
    // Replace tailwind class suffixes
    content = content.replace(/animate-pulse-lime/g, 'animate-pulse-cyan');
    content = content.replace(/shadow-glow-lime/g, 'shadow-glow-cyan');
    content = content.replace(/shadow-underglow-lime/g, 'shadow-underglow-cyan');
    content = content.replace(/bg-lime-[0-9]+/g, 'bg-cyan-500'); // Catch any stray lime bg
    
    // Theme colors in shader-background
    content = content.replace(/ELECTRIC LIME/g, 'NEON CYAN');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
});

// Also run through app directory to be safe (like globals.css, layout, page)
walkDir(path.join(__dirname, 'app'), function(filePath) {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let original = content;
      
      content = content.replace(/#A3FF12/gi, '#00F6FF');
      content = content.replace(/rgba\(163,\s*255,\s*18/gi, 'rgba(0, 246, 255');
      content = content.replace(/animate-pulse-lime/g, 'animate-pulse-cyan');
      content = content.replace(/shadow-glow-lime/g, 'shadow-glow-cyan');
      content = content.replace(/shadow-underglow-lime/g, 'shadow-underglow-cyan');
      
      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
