import { CommonModule, NgIf } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { Credito } from '../../model/credito.model';
import { CreditoService } from '../../service/credito-service/credito.service';

@Component({
    selector: 'app-consulta-credito',
    imports: [
        NgIf,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    templateUrl: './consulta-credito.component.html',
    styleUrl: './consulta-credito.component.scss'
})
export class ConsultaCreditoComponent implements AfterViewInit {

    public searchForm: FormControl<string> = new FormControl('') as FormControl<string>;
    public dataFromApi!: Credito;
    public trySubmit: boolean = false;

    constructor(private readonly creditoService: CreditoService) { }

    public ngAfterViewInit(): void {
        this.searchForm.valueChanges
                .pipe(debounceTime(500), distinctUntilChanged(), tap(value => console.log(value)))
                .subscribe(this.searchCredito.bind(this));
    }

    public searchCredito(numeroCredito: string): void {
        this.creditoService.getByNumeroCredito(numeroCredito)
                .subscribe(response => {
                    this.dataFromApi = response;
                    this.trySubmit = true;
                });
    }

}
