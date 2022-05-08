# Criando e configurando TSconfig

O arquivo `tsconfig.json` é utilizado configurar a compilação e as regras do TypeScript.

Para criar este arquivo execute o comando:

```bash
tsc --init
```

O arquivo de configuração gerado possui diversas propriedades que podem ser alteradas, as principais dela:

- `target`: Define a versão de compatibilidade na qual o JavaScript será compilado.
- `module`: Qual padrão de módulos JavaScript do projeto.
- `strict`: Habilita um desenvolvimento estrito, isso é importante para nós nos atentarmos sempre as tipagems.
- `outDir`: Define o diretório de output dos arquivos compilados

Com um diretório de output definido, ao executar o comando `tsc` o TypeScript será compilado e inserido neste diretório.
