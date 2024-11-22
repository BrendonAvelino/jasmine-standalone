it("Fizz Buzz", function(){
    expect(inteiro(1)).toBe(1);
    expect(inteiro(2)).toBe(2);
    expect(inteiro(3)).toBe("Fizz");
    expect(inteiro(4)).toBe(4);
    expect(inteiro(5)).toBe("Buzz");
    expect(inteiro(6)).toBe("Fizz");
    expect(inteiro(7)).toBe(7);
    expect(inteiro(8)).toBe(8);
    expect(inteiro(9)).toBe("Fizz");
    expect(inteiro(10)).toBe("Buzz");
});

it("Teste: Situação do aluno", function(){
    expect(escola(5)).toEqual("Reprovado");
    expect(escola(9)).toEqual("Aprovado");
})