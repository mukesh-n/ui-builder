export class Users {
  id: number = 0;
  name: string = '';
  mobilenumber: string = '';
  email: string = '';
  isvendor: boolean = false;
  iscustomer: boolean = false;
  issystem: boolean = false;
  isvendorapproved: boolean = false;
  issystemapproved: boolean = false;
  isnewuser: boolean = false;
  wishlist: Users.WishlistData = new Users.WishlistData();
  cart: Users.CartData = new Users.CartData();
  addresses: Users.AddressesData = new Users.AddressesData();
  gstno: string = '';
  version: number = 0;
  createdby: number = 0;
  createdon: Date = new Date();
  modifiedby: number = 0;
  modifiedon: Date = new Date();
  attributes: Users.AttributesData = new Users.AttributesData();
  isactive: boolean = false;
  issuspended: boolean = false;
  parentid: number = 0;
  isfactory: boolean = false;
  notes: string = '';
}

export namespace Users {
  export class AttributesData {
    gender: string = '';
    dob: Date = new Date();
    location: string = '';
    address: VendorAddressData = new VendorAddressData();
  }
  export class AddressesData {
    addresslist: Array<AddressItemData> = [];
  }
  export class VendorAddressData {
    pincode: string = '';
    state: string = '';
    address: string = '';
    location: string = '';
    city: string = '';
  }
  export class AddressItemData {
    name: string = '';
    mobilenumber: string = '';
    email: string = '';
    pincode: string = '';
    state: string = '';
    address: string = '';
    location: string = '';
    city: string = '';
    type: string = '';
    isdefault: boolean = false;
  }
  export class WishlistData {
    itemlist: Array<number> = [];
  }

  export class CartData {
    itemlist: Array<CartItemData> = [];
    address: AddressItemData = new AddressItemData();
  }
  export class CartItemData {
    skuid: number = 0;
    quantity: number = 0;
  }
}

export class UsersSelectReqDto {
  id: number = 0;
  mobilenumber: string = '';
}

export class UsersDeleteReqDto {
  id: number = 0;
  version: number = 0;
}

export class UsersGetOtpReq {
  mobilenumber: string = '';
  createuserifnotfound = false;
}

export class UsersValidateOtpReq {
  otpid: number = 0;
  otp: string = '';
}
export class UsersValidateOtpRes {
  accesstoken: string = '';
  refreshtoken: string = '';
  user: Users = new Users();
}
export class UsersRefreshTokenReq {
  refreshtoken: string = '';
}
export class UsersRefreshTokenRes {
  accesstoken: string = '';
  refreshtoken: string = '';
  user: Users = new Users();
}
export enum UserRoles {
  Customer = 1,
  Vendor = 2,
  System = 3,
}

export class UserSignUpDto extends Users {
  address: string = '';
  // addresses: Users.AddressesData = new Users.AddressesData();
}

export class test {
  name: Array<string> = [];
}
