#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const AGENT_DIR = path.join(os.homedir(), '.gemini', 'antigravity');
const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

async function install() {
    console.log(chalk.cyan('\n🚀 Iniciando instalação do Mentor Mode...'));

    try {
        // 1. Instalar Skills
        const targetSkillsDir = path.join(AGENT_DIR, 'skills');
        const sourceSkillsDir = path.join(TEMPLATES_DIR, 'skills');
        
        await fs.ensureDir(targetSkillsDir);
        await fs.copy(sourceSkillsDir, targetSkillsDir, { overwrite: true });
        console.log(chalk.green('  [+] Skills instaladas em: ') + targetSkillsDir);

        // 2. Instalar Knowledge
        const targetKnowledgeDir = path.join(AGENT_DIR, 'knowledge', 'mentor-mode');
        const sourceKnowledgeDir = path.join(TEMPLATES_DIR, 'knowledge');

        await fs.ensureDir(targetKnowledgeDir);
        await fs.copy(sourceKnowledgeDir, targetKnowledgeDir, { overwrite: true });
        console.log(chalk.green('  [+] Regras globais instaladas em: ') + targetKnowledgeDir);

        console.log(chalk.yellow('\n✅ Instalação concluída com sucesso!'));
        console.log(chalk.white('Reinicie seu chat e use ') + chalk.cyan('/mentor-ajuda') + chalk.white(' para começar.\n'));

    } catch (err) {
        console.error(chalk.red('\n❌ Erro durante a instalação:'), err);
    }
}

const command = process.argv[2];

if (command === 'install') {
    install();
} else {
    console.log(chalk.white('\nUso: ') + chalk.cyan('npx mentor-mode install'));
}
