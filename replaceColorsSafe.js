const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  try {
    fs.readdirSync(dir).forEach(f => {
      let dirPath = path.join(dir, f);
      let isDirectory = fs.statSync(dirPath).isDirectory();
      isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
  } catch (e) {
    console.error("Error reading dir " + dir, e);
  }
}

function processFiles(directory) {
  walkDir(directory, function(filePath) {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;
        
        // Replace hex colors
        content = content.replace(/#A3FF12/gi, '#00F6FF');
        // Replace rgba values
        content = content.replace(/rgba\(163,\s*255,\s*18/gi, 'rgba(0, 246, 255');
        // Replace classes
        content = content.replace(/animate-pulse-lime/g, 'animate-pulse-cyan');
        content = content.replace(/shadow-glow-lime/g, 'shadow-glow-cyan');
        content = content.replace(/shadow-underglow-lime/g, 'shadow-underglow-cyan');
        content = content.replace(/bg-lime-[^"'\s]+/g, 'bg-cyan-500');
        // Specific term
        content = content.replace(/ELECTRIC LIME/g, 'NEON CYAN');
        
        if (content !== original) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated: ${filePath}`);
        }
      } catch (e) {
        console.error("Error processing " + filePath, e);
      }
    }
  });
}

processFiles(path.join(__dirname, 'components'));
processFiles(path.join(__dirname, 'app'));
console.log("Done replacing.");
