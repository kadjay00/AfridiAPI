import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';
import { JwtManager, ISecureRequest } from '@overnightjs/jwt';
import { Request, Response } from 'express';
import { Logger } from '@overnightjs/logger';


export class ProductController 
{
 @Get('')
 private index(req: Request, res: Response)
 {
     Logger.Info("Test")
     return "hey"
 }
}