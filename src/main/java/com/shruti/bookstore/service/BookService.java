package com.shruti.bookstore.service;

import com.shruti.bookstore.dto.BookRequest;
import com.shruti.bookstore.dto.BookResponse;

import java.util.List;

public interface BookService {

    BookResponse createBook(BookRequest request);

    List<BookResponse> getAllBooks();

    BookResponse getBookById(Long id);

    void deleteBook(Long id);
}
