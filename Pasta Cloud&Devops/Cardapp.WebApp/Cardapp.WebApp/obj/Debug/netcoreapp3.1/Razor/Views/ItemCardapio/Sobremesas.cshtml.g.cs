#pragma checksum "C:\Users\CLIENTE\Documents\GitHub\Cardapio_Digital\Pasta Cloud&Devops\Cardapp.WebApp\Cardapp.WebApp\Views\ItemCardapio\Sobremesas.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "12807aa733879d63f708c93ea6666ece5d4ffe95"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_ItemCardapio_Sobremesas), @"mvc.1.0.view", @"/Views/ItemCardapio/Sobremesas.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\CLIENTE\Documents\GitHub\Cardapio_Digital\Pasta Cloud&Devops\Cardapp.WebApp\Cardapp.WebApp\Views\_ViewImports.cshtml"
using Cardapp.WebApp;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\CLIENTE\Documents\GitHub\Cardapio_Digital\Pasta Cloud&Devops\Cardapp.WebApp\Cardapp.WebApp\Views\_ViewImports.cshtml"
using Cardapp.WebApp.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"12807aa733879d63f708c93ea6666ece5d4ffe95", @"/Views/ItemCardapio/Sobremesas.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d4c159cd9a36cd561091102bdc18b70476dfc1d8", @"/Views/_ViewImports.cshtml")]
    public class Views_ItemCardapio_Sobremesas : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/chocolot.jpeg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("img-thumbnail img-fluid"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString("..."), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/virada.jpg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "C:\Users\CLIENTE\Documents\GitHub\Cardapio_Digital\Pasta Cloud&Devops\Cardapp.WebApp\Cardapp.WebApp\Views\ItemCardapio\Sobremesas.cshtml"
  
    ViewData["Title"] = "Visualização do Cardápio - Sobremesas";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<link href=""https://fonts.googleapis.com/icon?family=Material+Icons""
      rel=""stylesheet"">

<h1 style=""display: flex; justify-content: center;"" class=""my-5"">Edite o cardápio do seu restaurante</h1>

<div class=""card mx-auto"" style=""width: 90%; border: 2px solid #800; height: 80%"">
    <row style=""height: 5vh"">
        <div class=""btn-group w-100 h-100"" role=""group"">
            <button type=""button"" class=""btn btnNav""><span class=""material-icons pr-2"">star</span>Destaques</button>
            <button type=""button"" class=""btn btnNav""><span class=""material-icons pr-2"">restaurant_menu</span>Pratos principais</button>
            <button type=""button"" class=""btn btnNav""><span class=""material-icons pr-2"">local_bar</span>Bebidas</button>
            <button type=""button"" class=""btn btnNav""><span class=""material-icons pr-2"">fastfood</span>Lanches</button>
            <button type=""button"" class=""btn btnNavAtual""><span class=""material-icons pr-2"">icecream</span>Sobremesas</button>
        </div>
   ");
            WriteLiteral(@" </row>
    <row>
        <table class=""table"">
            <thead>
                <tr>
                    <th scope=""col"">Foto</th>
                    <th scope=""col"">Nome do item</th>
                    <th scope=""col"">Descrição</th>
                    <th scope=""col"">Valor do item</th>
                    <th scope=""col"">Ingredientes</th>
                    <th scope=""col"">Valor calórico</th>
                    <th scope=""col""></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "12807aa733879d63f708c93ea6666ece5d4ffe956749", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
                    </td>
                    <td class=""align-middle"">Sorvete de chocolate</td>
                    <td class=""align-middle"">Um sorvete mt gostoso geladinho trincando delicia gelado mt bom barato top excelente</td>
                    <td class=""align-middle"">R$ 3.00</td>
                    <td class=""align-middle"">Leite, chocolate</td>
                    <td class=""align-middle"">150kcal</td>
                    <td class=""align-middle"">
                        <div style=""display: flex; flex-direction: column; margin-right: 2vw;"">
                            <button class=""mb-3 btn btn-info"">Editar</button>
                            <button class=""btn btn-danger"">Excluir</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "12807aa733879d63f708c93ea6666ece5d4ffe958838", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
                    </td>
                    <td class=""align-middle"">Virada à paulista</td>
                    <td class=""align-middle"">Um prato mt bom suculento cheio de carne arroz feijão etc mt bom excelente coma coma tudo</td>
                    <td class=""align-middle"">R$ 15.00</td>
                    <td class=""align-middle"">Arroz, feijão, carne bovina, eggs</td>
                    <td class=""align-middle"">450kcal</td>
                    <td class=""align-middle"">
                        <div style=""display: flex; flex-direction: column; margin-right: 2vw;"">
                            <button class=""mb-3 btn btn-info"">Editar</button>
                            <button class=""btn btn-danger"">Excluir</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "12807aa733879d63f708c93ea6666ece5d4ffe9510947", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
                    </td>
                    <td class=""align-middle"">Virada à paulista</td>
                    <td class=""align-middle"">Um prato mt bom suculento cheio de carne arroz feijão etc mt bom excelente coma coma tudo</td>
                    <td class=""align-middle"">R$ 15.00</td>
                    <td class=""align-middle"">Arroz, feijão, carne bovina, eggs</td>
                    <td class=""align-middle"">450kcal</td>
                    <td class=""align-middle"">
                        <div style=""display: flex; flex-direction: column; margin-right: 2vw;"">
                            <button class=""mb-3 btn btn-info"">Editar</button>
                            <button class=""btn btn-danger"">Excluir</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </row>
</div>

<style>
    .btnNavAtual {
        display: flex;
        justify-content: center; 
        align-items: center;
        backgroun");
            WriteLiteral(@"d-color: #800;
        color: white;
        
    }

    .btnNavAtual:hover {
        color: white;
        background-color: #a00
    }

    .btnNavAtual:focus, .btnNav:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    .btnNav {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ddd;
        color: #666;
    }


</style>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
