const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDirs = [
  'public/images/smarsetu',
  'public/images/sustaina',
  'public/images/sams',
  'public/images/cicd'
];

async function optimizeImageDir(dir) {
  const dirPath = path.join(process.cwd(), dir);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`Skipping ${dir} - not found`);
    return;
  }

  const files = fs.readdirSync(dirPath).filter(f => 
    f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
  );

  for (const file of files) {
    const inputPath = path.join(dirPath, file);
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    console.log(`\nProcessing ${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);

    try {
      // Create WebP version
      const webpPath = inputPath.replace(/\.(jpg|jpeg|png)$/, '.webp');
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);
      
      const webpStats = fs.statSync(webpPath);
      console.log(`  WebP: ${(webpStats.size / 1024 / 1024).toFixed(2)}MB (${((1 - webpStats.size / originalSize) * 100).toFixed(1)}% reduction)`);

      // Create optimized version
      const optimizedPath = inputPath.replace(/\.(jpg|jpeg|png)$/, '-optimized$&');
      await sharp(inputPath)
        .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true })
        .toFile(optimizedPath);
      
      const optimizedStats = fs.statSync(optimizedPath);
      console.log(`  Optimized: ${(optimizedStats.size / 1024 / 1024).toFixed(2)}MB (${((1 - optimizedStats.size / originalSize) * 100).toFixed(1)}% reduction)`);

      // Backup and replace
      const backupPath = inputPath.replace(/\.(jpg|jpeg|png)$/, '-original$&');
      fs.renameSync(inputPath, backupPath);
      fs.renameSync(optimizedPath, inputPath);
      
      console.log(`  ✓ Replaced original with optimized version`);
      
    } catch (error) {
      console.error(`  Error processing ${file}:`, error.message);
    }
  }
}

async function main() {
  console.log('Starting project image optimization...');
  
  for (const dir of imageDirs) {
    await optimizeImageDir(dir);
  }
  
  console.log('\n✅ Project image optimization complete!');
}

main().catch(error => console.error(error));