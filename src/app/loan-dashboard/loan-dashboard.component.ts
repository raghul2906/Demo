import { _Bottom } from "@angular/cdk/scrolling";
import { Component } from "@angular/core";

@Component({
  selector: 'app-loan-dashboard',
  templateUrl: './loan-dashboard.component.html',
  styleUrls: ['./loan-dashboard.component.css']
})
export class  LoanDashboardComponent  {
  columnDefs = [{ Headername: "loanID" ,field: "loanID" },
   { Headername: "PurposeOfLoan" , field: "PurposeOfLoan" }, 
   { Headername:"status" ,  field: "status" },  { Headername: "option" ,field: "option",
   cellRenderer : function(params){
    return '<div><button (click)="onEdit()">Edit</button></div>'
}
    }
  ];

  rowData = [
    { loanID: 111001, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
    { loanID: 111002, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
    { loanID: 111003, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111004, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111005, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111006, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111007, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111008, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111009, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111010, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111011, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111012, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
    { loanID: 111013, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111014, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111015, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111016, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111017, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111018, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111019, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" ,},
    { loanID: 111020, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    { loanID: 111021, PurposeOfLoan: "Lorem ipsum dolor set", status: "In Progress" , },
    

  ];
}

