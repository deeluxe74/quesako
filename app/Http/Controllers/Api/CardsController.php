<?php

namespace App\Http\Controllers\Api;

use App\Card;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CardsController extends Controller
{
    public function index(){

        return Card::all();
    }

    public function post(Request $request){
        $card = new Card;
        $card->author = Request('pseudo');
        $card->word = Request('word');
        $card->description = Request('description');
        $card->sentence = Request('sentence');
        
        $card->save();
        return redirect()->to('card/'.$card->id);;
    }

    public function display($id, Request $request){
        return Card::findOrFail($id);
    }
}
