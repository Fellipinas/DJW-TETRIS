'use strict'
const COLUNA = 10;
const LINHA = 20;
const TAM_BLOCO = 30;

const canvas = document.getElementById('painel');
const ctx = canvas.getContext('2d');

ctx.canvas.width = COLUNA * TAM_BLOCO;
ctx.canvas.height = LINHA * TAM_BLOCO;

ctx.scale (TAM_BLOCO, TAM_BLOCO);