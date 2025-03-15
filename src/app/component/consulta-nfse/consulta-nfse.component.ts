import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { debounceTime, distinctUntilChanged, finalize, tap } from 'rxjs';
import { Credito } from '../../model/credito.model';
import { CreditoService } from '../../service/credito-service/credito.service';

@Component({
    selector: 'app-consulta-nfse',
    imports: [NgIf, MatTableModule, MatIconModule, MatToolbarModule, MatInputModule, ReactiveFormsModule],
    templateUrl: './consulta-nfse.component.html',
    styleUrl: './consulta-nfse.component.scss'
})
export class ConsultaNfseComponent implements AfterViewInit {

    public searchForm: FormControl<string> = new FormControl('') as FormControl<string>;
    public dataFromApi!: Credito[] | undefined;
    public trySubmit: boolean = false;
    @ViewChild('scrollContainer') public scrollContainer!: ElementRef;
    public displayedColumns = [
        'numeroCredito',
	      'numeroNfse',
	      'dataConstituicao',
        'valorIssqn',
        'tipoCredito',
	      'simplesNacional',
	      'aliquota',
	      'valorFaturado',
	      'valorDeducao',
	      'baseCalculo'
    ];
    private readonly creditoService: CreditoService = inject(CreditoService)
    private isDown = false;
    private startX = 0;
    private startY = 0;
    private scrollLeft = 0;
    private scrollTop = 0;

    ngAfterViewInit(): void {
        this.searchForm.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), tap(value => console.log(value)))
            .subscribe(this.searchCreditos.bind(this));
    }

    onMouseDown(event: MouseEvent): void {
        this.isDown = true;
        const container = event.currentTarget as HTMLElement;
        container.classList.add('active');
        this.startX = event.pageX - container.offsetLeft;
        this.startY = event.pageY - container.offsetTop;
        this.scrollLeft = container.scrollLeft;
        this.scrollTop = container.scrollTop;
    }

    onMouseUp(): void {
        this.isDown = false;
        document.querySelector('.scroll-container')?.classList.remove('active');
    }

    onMouseMove(event: MouseEvent): void {
        if (!this.isDown) return;
        event.preventDefault();
        const container = event.currentTarget as HTMLElement;
        const x = event.pageX - container.offsetLeft;
        const y = event.pageY - container.offsetTop;
        const walkX = (x - this.startX) * 2; // Ajuste a sensibilidade no eixo X
        const walkY = (y - this.startY) * 2; // Ajuste a sensibilidade no eixo Y
        container.scrollLeft = this.scrollLeft - walkX;
        container.scrollTop = this.scrollTop - walkY;
    }

    private searchCreditos(numeroNfse: string): void {
        this.creditoService.getCreditosByNfse(numeroNfse)
                .pipe(tap(() => this.dataFromApi = undefined), finalize(() => this.trySubmit = true))
                .subscribe((response) => {
                    this.dataFromApi = response;
                });
    }

}
