import { Injectable } from '@nestjs/common';
import { Carrinho, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarrinhoService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.CarrinhoCreateInput): Promise<Carrinho> {
    const carrinho = await this.db.carrinho.create({
      data: {
        ...data,
      },
    });

    return carrinho;
  }

  async findOne(carrinhoId: number): Promise<Carrinho> {
    return this.db.carrinho.findUnique({
      where: {
        id: carrinhoId,
      },
      include: {
        Item_do_carrinho: {
          include: {
            produto: true,
          },
        },
      },
    });
  }

  async update(
    carrinhoId: number,
    data: Prisma.CarrinhoCreateInput,
  ): Promise<Carrinho> {
    return this.db.carrinho.update({
      data,
      where: {
        id: carrinhoId,
      },
    });
  }

  async deleteOne(id: number): Promise<void> {
    await this.db.carrinho.delete({
      where: { id },
    });
  }
}
