{
  "excludes" : [
    ".classpath",
    ".project",
  ],
  "excludesDir" : [
    "target",
    ".settings",
    "build"
  ],
  "composition" : [
    "build",
    {{#each technologies}}
    "technologies/{{this}}",
    {{/each}}
  ]
}
