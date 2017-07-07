{
  "excludes" : [
    ".classpath",
    ".project",
    {{#has technologies 'springbootweb'}}
    "src/main/java/application/rest/HealthEndpoint.java",
    "src/main/java/application/rest/JaxrsApplication.java",
    "src/test/java/it/HealthEndpointIT.java"
    {{/has}}
  ],
  "excludesDir" : [
    "target",
    ".settings",
    "build"
  ],
  "composition" : [
    "build",
    "liberty",
    {{#each technologies}}
    "technologies/{{this}}",
    {{/each}}
  ]
}
