package com.shruti.bookstore.dto;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
public class BookRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String author;

    @NotBlank
    private String genre;

    @NotBlank
    private String isbn;

    @Positive
    private double price;

    @Min(0)
    private int stockQuantity;
}

