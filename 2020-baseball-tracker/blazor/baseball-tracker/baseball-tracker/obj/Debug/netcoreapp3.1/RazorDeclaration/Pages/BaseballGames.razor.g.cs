#pragma checksum "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/Pages/BaseballGames.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f66ad13905c1f9e1bf4420ed3c6e09cf2fe63d97"
// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace baseball_tracker.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using baseball_tracker;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/_Imports.razor"
using baseball_tracker.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/Pages/BaseballGames.razor"
using baseball_tracker.Data;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/baseballgames")]
    public partial class BaseballGames : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#nullable restore
#line 53 "/Users/rushing/2020-baseball-tracker/blazor/baseball-tracker/baseball-tracker/Pages/BaseballGames.razor"
       
    private BaseballEvent[] baseballEvents;

    protected override async Task OnInitializedAsync()
    {
        baseballEvents = await BaseballEventSevice.GetBaseballEvents();
    }

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private BaseballEventService BaseballEventSevice { get; set; }
    }
}
#pragma warning restore 1591