import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Receipt, Prisma } from '@prisma/client';

@Injectable()
export class ReceiptService {
  constructor(private prisma: PrismaService) {}

  async post(
    postWhereUniqueInput: Prisma.ReceiptWhereUniqueInput,
  ): Promise<Receipt | null> {
    return this.prisma.receipt.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ReceiptWhereUniqueInput;
    where?: Prisma.ReceiptWhereInput;
    orderBy?: Prisma.ReceiptOrderByWithRelationInput;
  }): Promise<Receipt[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.receipt.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createReceipt(data: Prisma.ReceiptCreateInput): Promise<Receipt> {
    return this.prisma.receipt.create({
      data,
    });
  }

  async updateReceipt(params: {
    where: Prisma.ReceiptWhereUniqueInput;
    data: Prisma.ReceiptUpdateInput;
  }): Promise<Receipt> {
    const { data, where } = params;
    return this.prisma.receipt.update({
      data,
      where,
    });
  }

  async deleteReceipt(where: Prisma.ReceiptWhereUniqueInput): Promise<Receipt> {
    return this.prisma.receipt.delete({
      where,
    });
  }
}
