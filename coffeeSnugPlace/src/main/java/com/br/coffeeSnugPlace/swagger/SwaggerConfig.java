package com.br.coffeeSnugPlace.swagger;

import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.basePackage("gerenciadorDeBiblioteca")).paths(PathSelectors.any()).build().apiInfo(apiInfo());
	}

	
	public ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("Swagger API now").description("Documento de acesso aos endpoints com o Swagger.").version("1.0").build();
	}
}
