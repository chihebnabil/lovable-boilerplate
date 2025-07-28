#!/bin/bash

# Lovable Boilerplate - Bolt.new Setup Script
echo "🚀 Setting up Lovable Boilerplate in Bolt.new..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Verify installation
echo "✅ Verifying installation..."
if [ -f "node_modules/.bin/vite" ]; then
    echo "✅ Vite installed successfully"
else
    echo "❌ Vite installation failed"
    exit 1
fi

# Check for required files
echo "🔍 Checking project structure..."
required_files=(
    "src/App.tsx"
    "src/main.tsx"
    "src/index.css"
    "components.json"
    "tailwind.config.ts"
    "vite.config.ts"
    ".github/instructions/global.instructions.md"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file found"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

# Start development server
echo "🔥 Starting development server on port 8080..."
npm run dev
