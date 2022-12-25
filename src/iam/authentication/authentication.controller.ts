import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { Auth } from './decorators/auth.decorator';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { AuthType } from './enum/auth-type.enum';

@Auth(AuthType.None)
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK) // by default @Post does 201, we wanted 200 - hence using @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    // ! Safer approach is to use a cookie instead of sending the token in the response body
    // @Res({ passthrough: true }) res: Response,
    // const accessToken = await this.authService.signIn(signInDto);
    // res.cookie('accessToken', accessToken, {
    //   secure: true,
    //   httpOnly: true,
    //   sameSite: true,
    // });
    return this.authService.signIn(signInDto);
  }
}
