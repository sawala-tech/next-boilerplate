module.exports = {
  description: 'Generate a REST API related files',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the resource (e.g., category)?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/restapi/{{kebabCase name}}/{{kebabCase name}}.d.ts',
      templateFile: 'templates/restapi/definition.d.ts.hbs'
    },
    {
      type: 'add',
      path: '../src/restapi/{{kebabCase name}}/{{kebabCase name}}.dto.d.ts',
      templateFile: 'templates/restapi/dto.d.ts.hbs'
    },
    {
      type: 'add',
      path: '../src/restapi/{{kebabCase name}}/constants.ts',
      templateFile: 'templates/restapi/constants.ts.hbs'
    },
    {
      type: 'add',
      path: '../src/restapi/{{kebabCase name}}/mutations.ts',
      templateFile: 'templates/restapi/mutations.ts.hbs'
    }
  ]
}
