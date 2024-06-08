/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProtobufDataService } from "../protobufData.service";
import { ProtobufDataCreateInput } from "./ProtobufDataCreateInput";
import { ProtobufData } from "./ProtobufData";
import { ProtobufDataFindManyArgs } from "./ProtobufDataFindManyArgs";
import { ProtobufDataWhereUniqueInput } from "./ProtobufDataWhereUniqueInput";
import { ProtobufDataUpdateInput } from "./ProtobufDataUpdateInput";

export class ProtobufDataControllerBase {
  constructor(protected readonly service: ProtobufDataService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProtobufData })
  async createProtobufData(
    @common.Body() data: ProtobufDataCreateInput
  ): Promise<ProtobufData> {
    return await this.service.createProtobufData({
      data: data,
      select: {
        createdAt: true,
        id: true,
        message: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProtobufData] })
  @ApiNestedQuery(ProtobufDataFindManyArgs)
  async protobufDataItems(
    @common.Req() request: Request
  ): Promise<ProtobufData[]> {
    const args = plainToClass(ProtobufDataFindManyArgs, request.query);
    return this.service.protobufDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        message: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProtobufData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async protobufData(
    @common.Param() params: ProtobufDataWhereUniqueInput
  ): Promise<ProtobufData | null> {
    const result = await this.service.protobufData({
      where: params,
      select: {
        createdAt: true,
        id: true,
        message: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProtobufData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProtobufData(
    @common.Param() params: ProtobufDataWhereUniqueInput,
    @common.Body() data: ProtobufDataUpdateInput
  ): Promise<ProtobufData | null> {
    try {
      return await this.service.updateProtobufData({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          message: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProtobufData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProtobufData(
    @common.Param() params: ProtobufDataWhereUniqueInput
  ): Promise<ProtobufData | null> {
    try {
      return await this.service.deleteProtobufData({
        where: params,
        select: {
          createdAt: true,
          id: true,
          message: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}