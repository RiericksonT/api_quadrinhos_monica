import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Name', example: 'John Doe' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ description: 'Email', example: 'john.doe@example.com' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password', example: 'P@ssw0rd!' })
  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message: 'Password is too weak',
    },
  )
  password: string;

  @ApiProperty({ description: 'Role', example: 'admin' })
  @IsNotEmpty({ message: 'Role is required' })
  role: string;

  @ApiProperty({
    description: 'Preferences',
    example: 'preference1,preference2',
  })
  @IsNotEmpty({ message: 'Preferences is required' })
  preferences: string;
}
