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
    {{#each technologies}}
    "technologies/{{this}}",
    {{/each}}
  ]
}
