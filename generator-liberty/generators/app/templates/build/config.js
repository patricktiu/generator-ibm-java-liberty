{
    "dependencies" : [
{{#bluemix.openApiServers}}
        {"groupId" : "io.swagger", "artifactId" : "swagger-annotations", "version" : "1.5.3", "scope" : "provided"},
        {"groupId" : "javax.ws.rs", "artifactId" : "javax.ws.rs-api", "version" : "2.0.1", "scope" : "provided"},
        {"groupId" : "com.ibm.websphere.appserver.api", "artifactId" : "com.ibm.websphere.appserver.api.jaxrs20", "version" : "1.0.10", "scope" : "provided"}
{{/bluemix.openApiServers}}
    ],
    "frameworkDependencies" : [
{{#bluemix.openApiServers}}
        {"feature" : "apiDiscovery-1.0"},
        {"feature" : "jaxrs-2.0"}
{{/bluemix.openApiServers}}
    ]
}