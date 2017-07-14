{
  "excludes" : [
    ".classpath",
    ".project",
    {{#missing technologies 'springbootweb'}}
    "src/main/java/application/rest/HealthEndpoint.java",
    "src/main/java/application/rest/JaxrsApplication.java",
    "src/test/java/it/HealthEndpointIT.java"
    {{/missing}}
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
