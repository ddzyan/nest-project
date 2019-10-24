import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch() // 不添加参数，则捕捉所有异常
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception instanceof HttpException ? exception.message : '';

    response.status(statusCode).json({
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
