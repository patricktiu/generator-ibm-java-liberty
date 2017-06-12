{
  "excludes" : [
    ".classpath",
    ".project"
  ],
  "excludesDir" : [
    "target",
    ".settings",
    "build"
  ],
  "composition" : [
    "picnmix",
    "technologies/microprofile",
    {{#each technologies}}
    "technologies/{{this}}",
    {{/each}}
  ]
}
