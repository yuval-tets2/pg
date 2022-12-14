/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTransactionArgs } from "./CreateTransactionArgs";
import { UpdateTransactionArgs } from "./UpdateTransactionArgs";
import { DeleteTransactionArgs } from "./DeleteTransactionArgs";
import { TransactionFindManyArgs } from "./TransactionFindManyArgs";
import { TransactionFindUniqueArgs } from "./TransactionFindUniqueArgs";
import { Transaction } from "./Transaction";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { TransactionService } from "../transaction.service";

@graphql.Resolver(() => Transaction)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TransactionResolverBase {
  constructor(
    protected readonly service: TransactionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async _transactionsMeta(
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Transaction])
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async transactions(
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Transaction, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "own",
  })
  async transaction(
    @graphql.Args() args: TransactionFindUniqueArgs
  ): Promise<Transaction | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Transaction)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "create",
    possession: "any",
  })
  async createTransaction(
    @graphql.Args() args: CreateTransactionArgs
  ): Promise<Transaction> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Transaction)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "update",
    possession: "any",
  })
  async updateTransaction(
    @graphql.Args() args: UpdateTransactionArgs
  ): Promise<Transaction | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Transaction)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "delete",
    possession: "any",
  })
  async deleteTransaction(
    @graphql.Args() args: DeleteTransactionArgs
  ): Promise<Transaction | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Customer])
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async customers(
    @graphql.Parent() parent: Transaction,
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    const results = await this.service.findCustomers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
