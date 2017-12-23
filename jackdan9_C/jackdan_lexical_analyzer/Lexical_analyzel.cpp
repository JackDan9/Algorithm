#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <iostream>

using namespace std;

static char reserveWord[32][20] = 
{
	"auto", 
	"break", 
	"case", "char", "const", "continue",
	"default", "do", "double", 
	"else", "enum", "extern", 
	"float", "for", 
	"goto", 
	"if", "int",
	"long",
	"register", "return", 
	"short", "signed", "sizeof", "static", "struct", "switch",
	"typeof",
	"union", "unsigned",
	"void", "volatile", "while"	
};

static char operatorOrDeDelimiter[36][10] = 
{
	"+", "-", "*", "/",
	"<", "<=", ">", ">=", "=", "==", "!=",
	";", "(", ")", "^", ",", 
	"\"", "\'", 
	"#", "&", "&&", "|", "||",
	"%", "~", 
	"<<", ">>", "[", "]", "{", "}", 
	"\\", ".", "\?", ":", "!"
};

static char IDentifierTbl[1000][50] = { "" };

int searchReserveWord(char reserveWord[][20], char s[])
{
	for(int i = 0; i < 32; i++)
	{
		if(strcmp(reserveWord[i], s) == 0)
		{
			return i + 1;
		}
	}
	return -1;
}

bool IsLetter(char letter) 
{
	if(letter >= 'a' && letter <= 'z' || letter >= 'A' && letter <= 'Z' || letter == '_')
	{
		return true;
	}
	else 
	{
		return false;
	}
}

bool IsDigit(char digit)
{
	if(digit >= '0' && digit <= '9')
	{
		return true;
	}
	else 
	{
		return false;
	}
}

void filterResource(char r[], int pProject)
{
	char tempString[10000];
	int count = 0;
	for(int i = 0; i <= pProject; i++)
	{
		if (r[i] == '/' && r[i + 1] == '/')
		{
			while (r[i] != '\n')
			{
				i++;
			}
		}

		else if(r[i] == '/' && r[i+1] == '*') 
		{
			i += 2;
			while(r[i] !='*' || r[i+1] != '/')
			{
				i ++;
				if(r[i] == '$')
				{
					printf("Comments wrong, did not find `*/`, the procedure is over!!!\n");
					exit(0);
				}
			}
			i += 2;
		}
		else if(r[i] != '\n' && r[i] != '\t' && r[i] != '\v' && r[i] != '\r')
		{
			tempString[count++] = r[i];
		}
	}

	tempString[count] = '\0';
	strcpy(r, tempString); 
}


void Scanner(int &syn, char resoureProject[], char token[], int &pProject)
{
	int i, count = 0; 
	char ch;
	ch = resoureProject[pProject];
	while(ch == ' ')
	{
		pProject++;
		ch = resoureProject[pProject];
	}
	for(i = 0; i < 20; i++)
	{
		token[i] = '\0';
	}
	if(IsLetter(resoureProject[pProject]))
	{
		token[count++] = resoureProject[pProject];
		pProject++;
		while(IsLetter(resoureProject[pProject]) || IsDigit(resoureProject[pProject]))
		{
			token[count++] = resoureProject[pProject];
			pProject++;
		}
		token[count] = '\0';
		syn = searchReserveWord(reserveWord, token);
		if(syn == -1)
		{
			syn = 100;
		}
		return;
	}
	else if(IsDigit(resoureProject[pProject]))
	{
		while(IsDigit(resoureProject[pProject]))
		{
			token[count++] = resoureProject[pProject];
			pProject++;
		}
		token[count] = '\0';
		syn = 99;
	}
	else if(ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == ';' || ch == '(' || ch == ')' || ch == '^' ||
		ch == ',' || ch == '\"' || ch == '\'' || ch == '~' || ch == '#' || ch == '%' || ch == '[' || ch == ']'
		|| ch == '{' || ch == '}' || ch == '\\' || ch == '.' || ch == '\?' || ch == ':')
	{
		token[0] = resoureProject[pProject];
		token[1] = '\0';
		for (i = 0; i < 36; i++)
		{
			if(strcmp(token, operatorOrDeDelimiter[i]) == 0)
			{
				syn = 33 + i;
				break;
			}
		}
		pProject++;
		return;
	}
	else if(resoureProject[pProject] == '<')
	{
		pProject++;
		if(resoureProject[pProject] == '=')
		{
			syn = 38;
		}
		else if(resoureProject[pProject] == '<')
		{
			pProject--;
			syn = 58;
		} 
		else 
		{
			pProject--;
			syn = 37;
		}
		pProject++;
		return;
	}
	else if(resoureProject[pProject] == '>')
	{
		pProject++;
		if(resoureProject[pProject] == '=')
		{
			syn = 40;
		}
		else if(resoureProject[pProject] == '>') 
		{
			syn = 59;
		}
		else 
		{
			pProject--;
			syn = 39;
		}
		pProject++;
		return;
	}
	else if(resoureProject[pProject] == '=')
	{
		pProject++;
		if(resoureProject[pProject] == '=')
		{
			syn = 42;
		}
		else 
		{
			pProject--;
			syn = 41;
		}
		pProject++;
		return;
	}
	else if(resoureProject[pProject] == '!')
	{
		pProject++;
		if(resoureProject[pProject] == '=')
		{
			syn = 43;
		}
		else
		{
			pProject--;
			syn = 68;
		}
		pProject++;
		return;
	}
	else if(resoureProject[pProject] == '&')
	{
		pProject++;
		if(resoureProject[pProject] == '&')
		{
			syn = 53;
		}
		else 
		{
			pProject--;
			syn = 52;
		}
		pProject++;
		return;
	}
	else if(resoureProject[pProject] == '|')
	{
		pProject++;
		if(resoureProject[pProject] == '|')
		{
			syn = 55;
		}
		else 
		{
			pProject--;
			syn = 54;
		}
		pProject++;
		return;
	}
	else if(resoureProject[pProject] == '$')
	{
		syn = 0;
	}
	else 
	{
		printf("Error: There is unkonwn word `%c` in my procedure \n", ch);
		exit(0);
	}
}

int main()
{
	char resoureProject[10000];
	char token[20] = { 0 };
	int i, syn = -1;
	int pProject = 0;
	FILE *fp, *fp1;
	if((fp = fopen("C:\\projects\\workspace\\C\\jackdan9_C\\jackdan_lexical_analyzer\\reserveWord.c", "r")) == NULL)
	{
		cout << "cannot open this file";
		exit(0);
	}
	resoureProject[pProject] = fgetc(fp);
	while(resoureProject[pProject] != '$')
	{
		pProject++;
		resoureProject[pProject] = fgetc(fp);
	}
	resoureProject[++pProject] = '\0';
	
	fclose(fp);
	
	cout << endl << "Source program: \n" << endl;
	cout << resoureProject << endl;

	filterResource(resoureProject, pProject);
	cout << endl << "Filter program: \n" << endl;
	cout << resoureProject << endl;

	pProject = 0;

	if((fp1 = fopen("C:\\projects\\workspace\\C\\jackdan9_C\\jackdan_lexical_analyzer\\reserveWord_compile.c", "w+")) == NULL)
	{
		cout << "cannot open this file";
		exit(0);
	}
	while(syn != 0)
	{
		Scanner(syn, resoureProject, token, pProject);
		if(syn == 100)
		{
			for(int i = 0; i < 1000; ++i)
			{
				if(strcmp(IDentifierTbl[i], token) == 0) 
				{
					break;
				}
				else if(strcmp(IDentifierTbl[i], "") == 0) 
				{
					strcpy(IDentifierTbl[i], token);
					break;
				}
			}
			printf("(Identifier, %s)\n", token);
			fprintf(fp1, "(Identifier, %s)\n", token);
		}
		else if(syn >= 1 && syn <= 32)
		{
			printf("(%s, --)\n", reserveWord[syn-1]);
			fprintf(fp1, "(%s, --)\n", reserveWord[syn-1]);
		}
		else if(syn == 99)
		{
			printf("(constant, %s)\n", token);
			fprintf(fp1, "(constant, %s)\n", token);
		}
		else if(syn >= 33 && syn <= 68)
		{
			printf("(%s, --)\n", operatorOrDeDelimiter[syn - 33]);
			fprintf(fp1, "(%s, --)\n", operatorOrDeDelimiter[syn - 33]);
		}
	}
	for(i = 0; i < 100; i++)
	{
		printf("The %d identifier: %s\n", i+1, IDentifierTbl[i]);
		fprintf(fp1, "The %d identifier: %s\n", i+1, IDentifierTbl[i] );
	}
	fclose(fp1);
	return 0;
}



