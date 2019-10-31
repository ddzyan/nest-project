import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Redirect,
  Query,
  Param,
  HttpStatus,
  HttpException,
  Delete,
  Put,
  // UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatRO } from './interfaces/cat.interface';
import { CreateCatDto, DelCatDto } from './dto';

@Controller('cats') // 设置统一路由路径
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('create')
  @HttpCode(200)
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get('all')
  async findAll(): Promise<CatRO[]> {
    return this.catsService.findAll();
  }

  @Delete('del')
  async del(@Body() params: DelCatDto) {
    return this.catsService.delCatById(params);
  }

  @Put('update')
  async update(@Param('id') id) {
    return id;
  }

  /**
   * 匹配的路径是 http://localhost:3000/cats/1
   */
  @Get(':id')
  findOne(@Param('id') id): Promise<CatRO> {
    return this.catsService.getCatById(id);
  }

  /**
   * 先执行 getDocs
   * 再将结果覆盖传递给 Redirect
   */
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302) // 响应码默认为302
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  /**
   * nest内存的异常捕捉系统，将捕捉未被处理的异常，并且返回统一信息
   */
  @Get('error')
  //@UseFilters(new AllExceptionsFilter()) 不建议使用实例化的方式，避免浪费内存
  //@UseFilters(AllExceptionsFilter) 针对路由的自定义路由捕捉
  async getError() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a joker',
        code: '00001',
      }, // 第一个参数可以为对象或者字符串，内容将作为结果返回给客户端
      403,
    );
  }
}
