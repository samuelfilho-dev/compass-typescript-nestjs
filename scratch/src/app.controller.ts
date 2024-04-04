import { Controller, Module, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("hi")
  public getRootRoute() {
    return "Hi There";
  }

  @Get("/bye")
  public getByThere() {
    return "bye there";
  }
}
