import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error("Something went wrong"));
  }

  getQuantiadeOfs() {
    const acao = {
      "acao": 1,
      "mes": new Date().getMonth() + 1
    };

    return this.http.post("API/DadosOF.php", acao, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
