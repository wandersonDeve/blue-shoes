import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ProdutoModule } from './produto/produto.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ItemDoCarrinhoModule } from './item-do-carrinho/item-do-carrinho.module';

@Module({
  imports: [
    UsuariosModule,
    AuthModule,
    ProdutoModule,
    CarrinhoModule,
    ItemDoCarrinhoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
