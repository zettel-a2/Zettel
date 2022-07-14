import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ReceiptDetails, Prisma } from '@prisma/client';

@Injectable()
export class ReceiptService {
  constructor(private prisma: PrismaService) {}

  async post(
    postWhereUniqueInput: Prisma.ReceiptDetailsWhereUniqueInput,
  ): Promise<ReceiptDetails | null> {
    return this.prisma.receiptDetails.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ReceiptDetailsWhereUniqueInput;
    where?: Prisma.ReceiptDetailsWhereInput;
    orderBy?: Prisma.ReceiptDetailsOrderByWithRelationInput;
  }): Promise<ReceiptDetails[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.receiptDetails.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createReceipt(
    data: Prisma.ReceiptDetailsCreateInput,
  ): Promise<ReceiptDetails> {
    return this.prisma.receiptDetails.create({
      data,
    });
  }

  async updateReceipt(params: {
    where: Prisma.ReceiptDetailsWhereUniqueInput;
    data: Prisma.ReceiptDetailsUpdateInput;
  }): Promise<ReceiptDetails> {
    const { data, where } = params;
    return this.prisma.receiptDetails.update({
      data,
      where,
    });
  }

  async deleteReceipt(
    where: Prisma.ReceiptDetailsWhereUniqueInput,
  ): Promise<ReceiptDetails> {
    return this.prisma.receiptDetails.delete({
      where,
    });
  }
}
