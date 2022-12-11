import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  findById(id:any):Observable<Cliente>{
    return this.http.get<Cliente>(`${API_CONFIG.baseURL}/cliente/${id}`);
  }

  findAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${API_CONFIG.baseURL}/cliente`);
  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${API_CONFIG.baseURL}/cliente`,cliente);
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${API_CONFIG.baseURL}/cliente/${cliente.id}`,cliente);
  }

  delete(id:any):Observable<Cliente>{
    return this.http.delete<Cliente>(`${API_CONFIG.baseURL}/cliente/${id}`);
  }
}
