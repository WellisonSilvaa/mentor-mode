#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const AGENT_DIR = path.join(os.homedir(), '.gemini', 'antigravity');
const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

async function install() {
    console.log(chalk.cyan('\n🚀 Iniciando instalação global do Mentor Mode...'));
    try {
        const targetSkillsDir = path.join(AGENT_DIR, 'skills');
        const sourceSkillsDir = path.join(TEMPLATES_DIR, 'skills');
        await fs.ensureDir(targetSkillsDir);
        await fs.copy(sourceSkillsDir, targetSkillsDir, { overwrite: true });

        const targetKnowledgeDir = path.join(AGENT_DIR, 'knowledge', 'mentor-mode');
        const sourceKnowledgeDir = path.join(TEMPLATES_DIR, 'knowledge');
        await fs.ensureDir(targetKnowledgeDir);
        await fs.copy(sourceKnowledgeDir, targetKnowledgeDir, { overwrite: true });

        console.log(chalk.green('✅ Regras e comandos instalados globalmente!'));
    } catch (err) {
        console.error(chalk.red('❌ Erro na instalação global:'), err);
    }
}

async function init() {
    console.log(chalk.cyan('\n🛠️  Inicializando acompanhamento no projeto atual...'));
    const targetDir = path.join(process.cwd(), '.mentor');
    const sourceDir = path.join(TEMPLATES_DIR, 'project');

    try {
        await fs.ensureDir(targetDir);
        await fs.copy(sourceDir, targetDir, { overwrite: false });
        console.log(chalk.green('✅ Pasta .mentor criada! (SESSION.md, SKILLS.md, CONCEPTS.md)'));
    } catch (err) {
        console.error(chalk.red('❌ Erro ao inicializar projeto:'), err);
    }
}

const command = process.argv[2];

if (command === 'install') {
    install();
} else if (command === 'init') {
    init();
} else {
    console.log(chalk.white('\nUso: '));
    console.log(chalk.cyan('  npx antigravity-mentor-mode install ') + chalk.white('- Instalação global'));
    console.log(chalk.cyan('  npx antigravity-mentor-mode init    ') + chalk.white('- Inicializa projeto local\n'));
}
