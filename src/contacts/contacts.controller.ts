import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './schemas/contact.schema';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Get()
  getContacts(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Post()
  createContact(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactService.create(createContactDto);
  }
}
