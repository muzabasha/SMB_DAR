const { execSync } = require('child_process');

try {
    console.log('Configuring git...');
    execSync('git config --global user.email "dev@example.com"', { stdio: 'inherit' });
    execSync('git config --global user.name "Developer"', { stdio: 'inherit' });

    console.log('\nAdding all changes...');
    execSync('git add -A', { stdio: 'inherit' });

    console.log('\nCommitting changes...');
    execSync('git commit -m "Fix: Comprehensive audit and fixes for unit-wise content rendering, video player, and component styling"', { stdio: 'inherit' });

    console.log('\nPushing to GitHub...');
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('\n✅ Push completed successfully!');
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
