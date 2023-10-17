import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get()
  hello(): String {
    return this.appService.getHello();
  }

  @Get('apk/version/:filename')
  downloadFile(@Param('filename') filename, @Res() res): Observable<String> {
    console.log("request")
    return of(res.sendFile(join(process.cwd(), 'apks/'+filename)))
  }
}
