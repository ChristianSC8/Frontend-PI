import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientModel } from 'src/app/models/client.model';
import { ProductModel } from 'src/app/models/product.model';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  public cliActivo = false; 
  public cliIco = false;

  openDropdownCli(){
    this.cliActivo = !this.cliIco;
    this.cliIco = !this.cliIco;
  }
  public proActivo = false; 
  public proIco = false;
  openDropdownProd(){
    this.proActivo = !this.proActivo;
    this.proIco = !this.proIco;
  }

  // -----------------implentacion de venta--------------------------


  products: ProductModel[] = [];
  clients: ClientModel[] = [];
  formSale: FormGroup = new FormGroup({});
  detail:any=[];

  constructor(private productService: ProductService,
    private clientService: ClientService,
     private formBuilder: FormBuilder,
     private saleService:SaleService) { }

 ngOnInit(): void {
   this.getProducts();
   this.getClients();

   this.formSale = this.formBuilder.group({
    serie: ['', Validators.required],
    numero: ['', Validators.required],
    descripcion: [''],
    cliente_id: ['', Validators.required], // Cambiado a "cliente_id"
    producto_id: [''], // Nuevo control de formulario para el producto
    detalle: [[]],
  });

  
   this.formSale.controls['cliente_id'].valueChanges.subscribe(val => {
     if (val) {
       this.getFindById(val);


     }
 });

 }
 getProducts(): void {
   this.productService.getProducts().subscribe(reponse => {
     this.products = reponse;
     console.log(this.products);

   });
 }

 getClients(): void {
   this.clientService.getClients().subscribe(response => {
     this.clients = response;

   });
 }
 public save():void{
   this.formSale.value.detalle=this.detail;
   if(this.formSale.valid){
     this.saleService.createSale(this.formSale.value).subscribe(response=>{
       console.log(response);

     });
   }
   console.log(this.formSale.value);

 }

 getFindById(id:string):void{
  const result = this.products.find(d => d.id === parseInt(id));
  this.detail.push({
      cantidad: 0,
      precio: result?.precio,
      producto_id: result?.id,
      nombre: result?.nombre,

    });
  }

}
