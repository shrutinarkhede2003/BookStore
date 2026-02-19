package com.shruti.bookstore.service;

import com.shruti.bookstore.dto.BookRequest;
import com.shruti.bookstore.dto.BookResponse;
import com.shruti.bookstore.entity.Book;
import com.shruti.bookstore.exception.ResourceNotFoundException;
import com.shruti.bookstore.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public BookResponse createBook(BookRequest request) {
        Book book = new Book();
        book.setTitle(request.getTitle());
        book.setAuthor(request.getAuthor());
        book.setPrice(request.getPrice());

        return mapToResponse(bookRepository.save(book));
    }

    @Override
    public List<BookResponse> getAllBooks() {
        return bookRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public BookResponse getBookById(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
        return mapToResponse(book);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

   private BookResponse mapToResponse(Book book) {
    return new BookResponse(
            book.getId(),
            book.getTitle(),
            book.getAuthor(),
            book.getPrice()
    );
}

}
