export class UserSession {
  id: number = 0
userid: number = 0
refreshtoken: string = ""
starttime: Date = new Date()
endtime: Date = new Date()
isexpired: boolean = false
version: number = 0
createdby: number = 0
createdon: Date = new Date()
modifiedby: number = 0
modifiedon: Date = new Date()
attributes: UserSession.AttributesData = new UserSession.AttributesData()
isactive: boolean = false
issuspended: boolean = false
parentid: number = 0
isfactory: boolean = false
notes: string = ""
}

export namespace UserSession {
  
                export class AttributesData
                {
                    
                }  
                
}

export class UserSessionSelectReqDto {
  id: number = 0;
}

export class UserSessionDeleteReqDto {
  id: number = 0;
  version: number = 0;
}