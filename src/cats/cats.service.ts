import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { CatRO } from './interfaces/cat.interface';
import { CatEntity } from './cats.entity';
import { CreateCatDto, DelCatDto } from './dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly CatsRepository: Repository<CatEntity>,
  ) {}
  // /private readonly cats: Cat[] = []; 单例对象，变量共享

  async create(dto: CreateCatDto): Promise<any> {
    const { name, age, breed } = dto;

    /**
     * 检查是否有同名称的数据
     * 1. 创建一个查询对象，传入的参数为查询的表名
     */
    const qb = this.CatsRepository.createQueryBuilder('cat').where(
      'cat.name = :name',
      { name },
    );

    // 执行查询
    const cat = await qb.getOne();

    // 判断
    if (cat) {
      const error = { name: 'name must be unique' };
      throw new HttpException(
        { message: 'Input data validation failed', error },
        HttpStatus.BAD_REQUEST,
      );
    }

    // 创建对象
    const newCat = this.CatsRepository.create({ name, age, breed });

    // 存储
    const saveCat = await this.CatsRepository.save(newCat);
    // 包装返回值，并且返回
    return this.buildCatRO(saveCat);
  }

  async findAll(): Promise<CatRO[]> {
    const cats = await this.CatsRepository.find();
    const catsRO: Array<CatRO> = [];
    for (const cat of cats) {
      catsRO.push(this.buildCatRO(cat));
    }
    return catsRO;
  }

  async getCatById(id: string): Promise<CatRO> {
    const cat = await this.CatsRepository.findOne(id);
    if (!cat) {
      const error = { name: 'id 不存在' };
      throw new HttpException(
        { message: 'Input data validation failed', error },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.buildCatRO(cat);
  }

  async delCatById(params: DelCatDto): Promise<number> {
    const delcat = await this.CatsRepository.delete(params.id);
    return delcat.affected;
  }

  async updateCatForId(id: string): Promise<any> {}

  private buildCatRO(cat: CatEntity) {
    const { id, name, age, breed } = cat;
    const catRO = { id, name, age, breed };

    return catRO;
  }
}
